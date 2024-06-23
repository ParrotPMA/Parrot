import InputBar from "./input-bar"

export const KanbanTapModal = () => {
  return (
    <div className="inset-0 z-50 flex items-center justify-center bg-black bg-opacity-25">
        <div className="flex flex-col gap-4 absolute top-12 w-[762px] h-[600px] bg-white shadow-lg rounded-lg p-4 ">
            <h3 className="text-base font-custom font-semibold">Activity</h3>
            <InputBar className="w-full rounded-md"/>
        </div>
    </div>
  )
}
