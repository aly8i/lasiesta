import { deleteCookie } from "cookies-next";
const handler = async(req, res) => {

    deleteCookie('acccessToken',{req,res});
    res.status(200).json("logged out");
}
export default handler;