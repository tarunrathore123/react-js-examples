import mongoose from 'mongoose';
const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true }
);
userSchema.methods.matchPassword = async function (enteredPassword) {
  // console.log(enteredPassword);
  // console.log(enteredPassword === this.password);
  // let p = enteredPassword === this.password;
  // p = await p;
  // const p = await this.password;
  // const a = await bcrypt.compare(enteredPassword, this.password);
  // console.log(a);
  return enteredPassword === this.password;
};

const User = mongoose.model('User', userSchema);

export default User;
