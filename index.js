import { franc } from 'franc'
import langs from 'langs'
import colors from 'colors'
import figlet from 'figlet';

const inputString = process.argv[2];
const langCode = franc(inputString);


figlet('Languge Guesser', function (err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    try {
        const language = langs.where("3", langCode);
        console.log(data.yellow)
        console.log('The string ' + inputString + 'is in ' + language.name.green)
        // console.log(language.name.green);

    } catch (error) {
        console.log('not found!!'.red)
    }
});