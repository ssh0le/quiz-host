import { useState } from 'react';

const Multiplayer = () => {
  const [roomCode, setRoomCode] = useState('');
  const [roomName, setRoomName] = useState('');

  const handleCreateRoom = () => {
    // TODO: Implement room creation logic
    console.log('Creating room:', roomName);
  };

  const handleJoinRoom = () => {
    // TODO: Implement room joining logic
    console.log('Joining room:', roomCode);
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Multiplayer</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {/* Create Room Panel */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <span>🏠</span> Create Room
          </h2>
          <p className="text-gray-600 mb-4">
            Create a new room and invite your friends to join the quiz together.
          </p>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Room Name
              </label>
              <input
                type="text"
                value={roomName}
                onChange={(e) => setRoomName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter room name"
              />
            </div>
            <button
              onClick={handleCreateRoom}
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Create Room
            </button>
          </div>
        </div>

        {/* Join Room Panel */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <span>🔗</span> Join Room
          </h2>
          <p className="text-gray-600 mb-4">
            Enter a room code to join an existing quiz room with your friends.
          </p>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Room Code
              </label>
              <input
                type="text"
                value={roomCode}
                onChange={(e) => setRoomCode(e.target.value.toUpperCase())}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-center text-2xl font-mono tracking-widest"
                placeholder="XXXX"
                maxLength={4}
              />
            </div>
            <button
              onClick={handleJoinRoom}
              className="w-full px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
            >
              Join Room
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Multiplayer;
