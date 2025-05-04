const Logout={};

Logout.logout = async (req , res) =>{
    res.clearCookie("authToken");

    return res.json({message:"Cirre de sesion completado"});
}

export default Logout;