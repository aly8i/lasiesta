import { deleteCookie } from "cookies-next";
const handler = async(req, res) => {

  deleteCookie('accessToken',{req,res,path:'/',secure:true,sameSite:"strict"});
    res.status(200).json("logged out");
}
export default handler;