import { ref } from "vue";

export function useImageFix(menu){
    const drinks = {
        'Sprite': 'https://images.unsplash.com/photo-1625772299848-391b6a87d7b3',
        'Fanta orange': 'https://images.unsplash.com/photo-1624517452488-04869289c4ca',
        'Coca cola': 'https://images.unsplash.com/photo-1554866585-cd94860890b7',
        'Bubblewater': 'https://images.unsplash.com/photo-1523362628745-0c100150b504'
    }
    const salads = {
        'Greek salad': 'https://images.unsplash.com/photo-1529059997568-3d847b1154f0',
        'Caesar salad': 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9',
        'Italian salad': 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd',
        'Shrimp salad': 'https://images.unsplash.com/photo-1551248429-40975aa4de74'
    }

    const fixedMenu = ref(menu)

    // for(item in menu){
    //     if(item.type === 'drink' && item.imgUrl === 'no-image'){
    //         item.imgUrl = drinks[item.name]
    //     }
    //     if(item.type === 'salad' && item.imgUrl === 'no-image'){
    //         item.imgUrl = salads[item.name]
    //     }
    // }
    fixedMenu.value.filter(item => (item.type === 'drink' || item.type === 'salad') && item.imgUrl === 'no-image')
        .forEach(item => {
            if(!(item.name in drinks) && !(item.name in salads)) item.imgURl = 'mysterious_image'
            if(item.type === 'drink') item.imgUrl = drinks[item.name]
            else item.imgUrl = salads[item.name]         
        });

    console.log(fixedMenu.value)
    return fixedMenu.value
}
