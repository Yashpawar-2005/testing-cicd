import Mybutton from "@repo/ui/temp";
import {client} from "@repo/db/client";
export default async function Home() {
  const users=await client.user.findMany({
    where:{
      username:{
        not:" ",
      }
    }
  })
  return (
    <div>
     {users.map((user) =>(<>
      <div>{user?.username}</div>
      <div>{user?.password}</div>
     </>
     ))}
        <Mybutton 
  name="omg" 
  handlefunction={() => { console.log('working'); }} 
/>
  </div>
  );
}
