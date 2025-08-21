const UserMsg = () => {
  return (
    <div className="relative flex max-w-full flex-col grow">
      <div className="min-h-8 relative flex w-full flex-col items-end gap-2 text-start break-words whitespace-normal">
        <div className="relative max-w-3/4 rounded-[18px] bg-gray-200 p-2">
          <div className="whitespace-pre-wrap">Hello, how are you?</div>
        </div>
      </div>
    </div>
  );
};

export default UserMsg;
