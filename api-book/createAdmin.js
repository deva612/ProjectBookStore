const User = require('./models/User')
const bcrypt = require('bcrypt')
async function createAdmin(){
    try {
        let user = await User.findOne({email: 'ujjawal70600@gmail.com'});
        if(user){
            console.log('user updated successfully....');   
        }else{
            user = new User();
            user.firstName= 'Ujjawal';
            user.lastName= 'Mathur';
            user.mobileNo = '7060059260';
            user.email= "ujjawal70600@gmail.com";
            let password = bcrypt.hashSync('989743',10);
            user.password = password;
            user.userType= 'admin';
            await user.save();
            console.log("user created successfully.......");
            
        }
    } catch (err) {
        console.log(err);
        
    }
}
module.exports = createAdmin;