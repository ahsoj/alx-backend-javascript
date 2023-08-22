const http = require('http');
const fs = require('fs');

const HOST = 'localhost';
const PORT = 1245;
const app = http.createServer();

const dbFile = process.argv[2] ?? '';

const countStudents = (path) =>
  new Promise((resolve, reject) => {
    if (!path) {
      reject(new Error('Cannot load the database'));
    }
    if (path) {
      fs.readFile(path, (err, data) => {
        if (err) {
          reject(new Error('Cannot load the database'));
        }
        if (data) {
          const reports = [];
          const fileLines = data.toString('utf-8').trim().split('\n');
          const students = {};
          const dbNames = fileLines[0].split(',');
          const studentPropNames = dbNames.slice(0, dbNames.length - 1);

          for (const line of fileLines.slice(1)) {
            const studentRecord = line.split(',');
            const studentPropValues = studentRecord.slice(
              0,
              studentRecord.length - 1
            );
            const field = studentRecord[studentRecord.length - 1];
            if (!Object.keys(students).includes(field)) {
              students[field] = [];
            }
            const studentEntries = studentPropNames.map((propName, idx) => [
              propName,
              studentPropValues[idx],
            ]);
            students[field].push(Object.fromEntries(studentEntries));
          }

          const totalStudents = Object.values(students).reduce(
            (pre, cur) => (pre || []).length + cur.length
          );
          reports.push(`Number of students: ${totalStudents}`);
          for (const [field, group] of Object.entries(students)) {
            reports.push(
              [
                `Number of students in ${field}: ${group.length}.`,
                'List:',
                group.map((student) => student.firstname).join(', '),
              ].join(' ')
            );
          }
          resolve(reports.join('\n'));
        }
      });
    }
  });

app.on('request', (req, res) => {
  req.url === '/'
    ? function handler(_, res) {
        const responseText = 'Hello Holberton School!';

        res.setHeader('Content-Type', 'text/plain');
        res.setHeader('Content-Length', responseText.length);
        res.statusCode = 200;
        res.write(Buffer.from(responseText));
      }
    : req.url === '/students' &&
      function handler(_, res) {
        const responseParts = ['This is the list of our students'];

        countStudents(dbFile)
          .then((report) => {
            responseParts.push(report);
            const responseText = responseParts.join('\n');
            res.setHeader('Content-Type', 'text/plain');
            res.setHeader('Content-Length', responseText.length);
            res.statusCode = 200;
            res.write(Buffer.from(responseText));
          })
          .catch((err) => {
            responseParts.push(
              err instanceof Error ? err.message : err.toString()
            );
            const responseText = responseParts.join('\n');
            res.setHeader('Content-Type', 'text/plain');
            res.setHeader('Content-Length', responseText.length);
            res.statusCode = 200;
            res.write(Buffer.from(responseText));
          });
      };
});

app.listen(PORT, HOST, () => {
  console.log(`Server listening on http://${HOST}:${PORT}\n`);
});

module.exports = app;
