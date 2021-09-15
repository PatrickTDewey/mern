const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const UserSchema = new mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    email:{
        type:String,
        required:[true, 'Email is required'],
        // validate: {
        //     validator:
        //     message: 'Please enter valid email'
        // }
    },
    password:{
        type:String,
        required: [true, 'Password is required'],
        minlength: [8, 'Password must be 8 characters or longer']
    },
}, { timestamps: true });

// Create a temporary confPassword attr in schema
UserSchema.virtual('confirmPassword')
  .get(() => this._confirmPassword)
  .set( value => this._confirmPassword = value)

// Create backend validations for pw conf
UserSchema.pre("validate", function(next){
    if (this.password !== this.confirmPassword) {
        this.invalidate("confirmPassword", "Passwords must match.")
    }
    next()
})
//  Before saving the user swap out the password with the hashed pw
UserSchema.pre("save", function(next){
    bcrypt.hash(this.password, 10)
        .then(hashedPassword => {
            this.password = hashedPassword
            next()
        })
})

module.exports.User = mongoose.model('User', UserSchema);