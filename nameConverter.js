let library = [[' ',' '], ['a','ka'], ['b','zu'], ['c','mi'], ['d','te'], ['e','ku'], ['f','lu'], ['g','ji'], ['h','ri'], ['i','ki'], ['j','zu'], ['k','me'], ['l','ta'], ['m','rin'], ['n','to'], ['o','mo'], ['p','no'], ['q','ke'], ['r','shi'], ['s','ari'], ['t','chi'], ['u','do'], ['v','ru'], ['w','mei'], ['x','na'], ['y','fu'], ['z','zi']] 

document.getElementById('display').innerHTML = 'Your Japanese Name is: ' + japanName;

function convert()  {
    let shortName = '';
    let japanName = '';
    let counter = 0;

    let name = document.getElementById('name').value;

    document.getElementById('display').style.color = "blue";

        for(let i = 0; i < name.length; i++)    {
            if(counter < 4)    {
                shortName += name[i].toLowerCase();
                counter++
                
            }
        }
        counter = 0;
        //console.log(counter);

        for(let i = 0; i < name.length; i++)    {
            if(name[i] == ' ')   {
                for(let j = i; j < name.length; j++)    {
                    if(counter < 5)    {
                        shortName += name[j].toLowerCase();
                        counter++
                    }
                }
            }
        }

    //console.log(shortName);

    for(let i = 0; i < shortName.length; i++)    {
        for(let j = 0; j < library.length; j++)    {
            if(shortName[i] == library[j][0])   {
                japanName += library[j][1]
            }
        }
    }

    document.getElementById('display').innerHTML = 'Your Japanese Name is: ' + japanName;
}

//console.log(convert('Tony Wijaya'));