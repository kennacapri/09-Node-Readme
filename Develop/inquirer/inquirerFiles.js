const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'what is the title of your README?',
        validate: (titleInput) => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter a title for your README!');
            return false;
            }
        }
    },
    {
        
    }





];