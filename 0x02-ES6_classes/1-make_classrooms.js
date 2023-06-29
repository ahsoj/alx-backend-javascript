import ClassRoom from './0-classroom.js';

export default function initializeRooms() {
  const room = new ClassRoom(19);
  const rooms = new ClassRoom(20);
  const _rooms = new ClassRoom(34);
  return [room, rooms, _rooms];
}
