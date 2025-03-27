export default function Card(props) {
    console.log("name",props.task);
    
  return (
    <div className="p-1  w-[250px] h-[40px] rounded-md bg-input ">
{props.task}
    </div>
  );
}
