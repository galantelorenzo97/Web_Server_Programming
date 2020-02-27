export const Players = [
    { name: 'Bernie', Score: 0, isDealer: false }
];

export const MyCards = []

export const PictureDeck = [
    'http://www.dumpaday.com/wp-content/uploads/2020/02/00-131-750x280.jpg',
    'http://www.dumpaday.com/wp-content/uploads/2020/02/00-123-750x280.jpg',
    'http://www.dumpaday.com/wp-content/uploads/2019/02/00-50-620x280.jpg'
];

export const CaptionDeck = [
    "I have no captions so I typed this",
    "I only export pain and pizza, and I'm all out of pizza",
    "The face when there's a bug in the program",
    "When you casually forget to patch a security hole in your program",
    "Th- th- th- th- th- th- that's all folks!"
];

export let CurrentPicture = "";

export const CardsInPlay = [];

export function Init(){
    MyCards.push(CaptionDeck[0]);
    MyCards.push(CaptionDeck[1]);

    CurrentPicture = PictureDeck[0];
}