const Profile = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="relative box-border shadow-lg flex flex-col w-[80%] h-[70%] lg:w-[30%]">
         <div className="absolute rounded-full w-32 h-32 bg-green-400 left-[calc(50%-64px)] top-[26%]">
            <img className="w-full h-full rounded-full" src="https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg=" alt="" />
         </div>
        <div className="w-full basis-2/5 bg-blue-400"></div>
        <div className="w-full basis-2/5 flex flex-col justify-center items-center">
            <div className="flex gap-1 mt-20 justify-center items-end">
               <h1 className="text-xl">John Doe</h1>
               <p>32</p>
            </div>
            <h1>London</h1>
        </div>
        <div className="w-full border-t border-black/30 basis-1/5 flex justify-evenly items-center">
            <div className="flex flex-col justify-center items-center">
               <h1 className="text-3xl">80K</h1>
               <h1>Followers</h1>
            </div>
            <div className="flex flex-col justify-center items-center">
               <h1 className="text-3xl">803K</h1>
               <h1>Likes</h1>
            </div>
            <div className="flex flex-col justify-center items-center">
               <h1 className="text-3xl">1.4K</h1>
               <h1>Photos</h1>
            </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
