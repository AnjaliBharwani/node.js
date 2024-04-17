// Example: Connecting to MongoDB using Mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/myDatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const Schema = mongoose.Schema;
const userSchema = new Schema({
    name: String,
    email: String
});

const User = mongoose.model('User', userSchema);

// Usage example
const newUser = new User({ name: 'John Doe', email: 'john@example.com' });
newUser.save()
    .then(user => {
        console.log('User saved:', user);
    })
    .catch(err => {
        console.error('Error saving user:', err);
    });
