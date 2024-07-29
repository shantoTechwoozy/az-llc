// carddata.ts

interface CardData {
    title: string;
    description: string;
    buttonText: string;
    imagePath: string; // Add the image path here
}

const cardData: CardData[] = [
    {
        title: "Companionship",
        description: "Warm companionship to brighten your loved one's day, always by their side",
        buttonText: "Click Here",
        imagePath: "https://www.ophealthservices.com/wp-content/uploads/2020/10/Health-Care-Worker-and-Elderly-1024x682.jpg", // Replace with your image path
    },
    {
        title: "Assistance with Activities of Daily Living",
        description: "Personalized support for daily tasks, ensuring comfort, dignity, and independence in every moment",
        buttonText: "Click Here",
        imagePath: "https://voiceaustralia.community/files/article/9bc77725-7aa6-4595-859b-53020ec82e5d/public/article-2.webp", // Replace with your image path
    },
    {
        title: "Transportation to Medical Appointments",
        description: "Reliable rides to medical appointments, ensuring your loved one arrives safely",
        buttonText: "Click Here",
        imagePath: "https://www.access-healthcare.com/wp-content/uploads/2020/10/long-shot-nurse-helping-old-man-getting-up_23-2148239021.jpg", // Replace with your image path
    },
    {
        title: "View More Services",
        description: "Explore our wide range of dedicated services for your individualized care and well-being.",
        buttonText: "Click Here",
        imagePath: "https://qtxasset.com/quartz/qcloud5/media/image/GettyImages-1380983332.jpg?VersionId=3uBA2vpfehEUaOqZwlFz3YBYfgBF28WN", // Replace with your image path
    }
];

export default cardData;
