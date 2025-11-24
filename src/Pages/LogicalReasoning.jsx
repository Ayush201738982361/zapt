import { supabase } from "../supabase-client";

function LogicalReasoning(){
    return (
    <>
        <table className="font-arial border-collapse w-full margin-150px"> 
            <tbody>
            <tr>
                <th>Problem</th>
                <th>Difficulty</th>
                <th>Status</th>
            </tr>
            <tr>
                <td className="border border-solid border-gray-300 p-2 text-center w-[50%]">Dummy</td>
                <td className="border border-solid border-gray-300 p-2 text-center w-[35%]">Dummy</td>
                <td className="border border-solid border-gray-300 p-2 text-center w-[15%]">Dummy</td>
            </tr>
            </tbody>
        </table>
    </>
    )
}

export default LogicalReasoning;