import { deleteCookie } from "cookies-next";
const handler = async(req, res) => {

  deleteCookie(req,res,'accessToken',{path:'/',secure:true,sameSite:"strict"});
    res.status(200).json("logged out");
}
export default handler;