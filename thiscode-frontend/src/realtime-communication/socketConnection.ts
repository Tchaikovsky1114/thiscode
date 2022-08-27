import io, { Socket } from 'socket.io-client'

let socket:Socket | null = null;

export const connectWithSocketServer = () => {
  
  socket = io('http://localhost:5002');
  socket.on('connect', () => {
    console.log('성공적으로 소켓서버와 연결되었습니다.')
    console.log(socket?.id);
    
  })
}
