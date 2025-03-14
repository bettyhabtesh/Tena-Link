const notifications = [
    { id: 1, name: "Meg Griffin", message: "has left you a review.", date: "March 1, 2023" },
    { id: 2, name: "Cleveland Brown", message: "has left you a review.", date: "Feb 26, 2023" },
    { id: 3, name: "Glenn", message: "accepted your invite to co-host a home.", date: "April 25, 2022" },
  ];
  
  const Notifications = () => {
    return (
      <div className="p-6">
        <h2 className="text-2xl font-bold">Notifications</h2>
        <div className="bg-white shadow-md rounded-lg mt-4 p-4">
          {notifications.map((notification) => (
            <div key={notification.id} className="flex justify-between items-center border-b py-3">
              <div>
                <p className="font-medium">{notification.name} {notification.message}</p>
                <p className="text-sm text-gray-500">{notification.date}</p>
              </div>
              <button className="text-gray-500 hover:text-red-500">✖</button>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Notifications;