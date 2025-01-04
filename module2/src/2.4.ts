{
//

// Generics with Interface
interface Developer<T> {
    name: string;
    computer: {
        brand: string;
        model: string;
        releaseYear: number;
    }
    smartWatch: T
}

const poorDeveloper: Developer<{
    brand: string;
    model: string;
    display: string;
}> = {
    name: 'Mohasin',
    computer: {
        brand: 'Asus',
        model: 'X055',
        releaseYear: 2015,
    },
    smartWatch: {
        brand: 'Tecno',
        model: 'kt65',
        display: "OLED",
    },
}

const poorDeveloper2: Developer<{
    brand: string;
    model: string;
    heartTrack: boolean;
    sleepTrack: boolean;
}> = {
    name: 'Ahmed',
    computer: {
        brand: 'Apple',
        model: 'M1',
        releaseYear: 2020,
    },
    smartWatch: {
        brand: 'samsung',
        model: 'th76',
        heartTrack: true,
        sleepTrack: true,
    },
}


// Generics with Interface and type alias
/////////////////

interface Developer<T, X = null> {
    name: string;
    computer: {
        brand: string;
        model: string;
        releaseYear: number;
    };
    smartWatch: T;
    bike? : X;
}

type TecnoWatch = {
    brand: string;
    model: string;
    display: string;
}

const poorDeveloper3: Developer<TecnoWatch> = {
    name: 'Mohasin',
    computer: {
        brand: 'Asus',
        model: 'X055',
        releaseYear: 2015,
    },
    smartWatch: {
        brand: 'Tecno',
        model: 'kt65',
        display: "OLED",
    },
}

interface AppleWatch {
    brand: string;
    model: string;
    heartTrack: boolean;
    sleepTrack: boolean;
}

interface YamahaBike {
    model: string;
    engineCapacity: string;
}

const poorDeveloper4: Developer<AppleWatch, YamahaBike> = {
    name: 'Ahmed',
    computer: {
        brand: 'Apple',
        model: 'M1',
        releaseYear: 2020,
    },
    smartWatch: {
        brand: 'samsung',
        model: 'th76',
        heartTrack: true,
        sleepTrack: true,
    },
    bike: {
        model: "Yamaha",
        engineCapacity: "120c",
    }
}




















//    
}