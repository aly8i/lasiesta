import { deleteCookie } from "cookies-next";
const handler = async(req, res) => {

  deleteCookie('accessToken', "", { req, res, path: '/', httpOnly: true,domain:`${process.env.NEXT_PUBLIC_BASE_URL}`, sameSite: "strict" });
    res.status(200).json("logged out");
}
export default handler;