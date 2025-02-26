interface omg{
 name:string,
 handlefunction:()=>void
}
export default function Mybutton(props: omg) {
    return (
      <div>
        <button >{props.name}</button>
      </div>
    );
  }