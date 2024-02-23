import CarouselComponent from '../components/CarouselComponent';

export default function HomeCarousel(){
    const carouselData = [
        {
          index:1,
          image: require('../assets/Baahubali.jpg'), 
          text: 'Telugu . Action/War',
          video: "https://imdb-video.media-imdb.com/vi657702425/1434659607842-pgv4ql-1590826525047.mp4?Expires=1696138823&Signature=XNYwp9~Pv5O3WsxfmXwZOrZWq7lCYAaat7I7lJAEgK9zE4EckoaXt3-c3YogQ1bLnnpx-L0BwToxLWl4YWKHBz8zPG66v~uKgn8y7AgiEDn1c3~cXfNDsR8pi5~mFuDOMfxr9wkgnVe~PRpwYHN-G9ZHIfJgr0PgCUDViXlewrrZBPS1x-HNlPCB3Agl0GSXRQ85KtqZArnyXFELSk-Sw2Lz9N9scWLjaBCh0YyZN0NO1hRB5YPKHJi-hNdZwLXEnwkcw5d5q4hH~Z3Nb1LqGq~yW3s58VO3IBR~-ZB1wN~ZRg68Svqs1vWIbf3LfBqERzVEVWwXkNiRjmTV7tMLvA__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
        },
        {
          index:2,
          image: require('../assets/Brahmastra.jpg'),
          text: 'Hindi . Mythology',
          video: "https://imdb-video.media-imdb.com/vi2004861465/1434659607842-pgv4ql-1661274930160.mp4?Expires=1696138056&Signature=B9e8y5imUg7HpbN7yb~tYXt-pi5JtxN41eWK~UF7dUe~ngF7Xp72sttSnzt6NG69bi1g5DYEszKnHdDnf0wrwfzA9L1Bs0EWceHaNiMBrV7iBAg2FeYLmpZw9~G7DyoFhzf6T-M8g0B45yYgLd7BiGc9Nh3HLPuyuA9i9x6xnd6Z3VpfszKw65r9GmQ5M06H7-3NoHyY9G70wzEY39wtXNSYLd-sF3b~YSg35Nia3oBo01X8IHIHAxo5QFZ537hLBuwclTgIlG~mi1nDRbgD7AMjHLl-LbF-LT~ikLygjhhD9a~HvvliGM4~r~bAVMMt82ReAzp6fV8Tni5PJtWKlw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
        },
        {
          index:3,
          image: require('../assets/Romancham.webp'), 
          text: 'Malayalam . Comedy/Horror',
          video: "https://imdb-video.media-imdb.com/vi135841049/1434659607842-pgv4ql-1675279805247.mp4?Expires=1696139325&Signature=oaTzKpCV8kWJPZQ1cGourq-xKdbYUaceDjzu6Q~Zdt~1JXRBzwBVUhh-ediXMe4l-p5veGDBsNUVuv3RIFUQx5Q~CPbDEiXhWyQwvMzo5bQ3gkBk7Qogm7p8UwUArgpDMj5uZN2NTbHVWE1tvDpxtPb4iI7TnG46t2X734sA1HTMCkFu83dwT4dC0vstRmgLHqqlUopkrTbcOvYqA9cI03M6IjdetFQsQFLEHY0AAgicvgo8b1Yw1W7OMGRtS5Jc-49tjUoBT6wAGBNfehAYZbwBKTY8xGYryPVABn4pSJy2t1NvwBp3itSivcEX9OIt9Xul9VujaistjPxYreWL1w__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
        },
        {
          index:4,
          image: require('../assets/vikram.webp'), 
          text: 'Tamil . Action/Mystery',
          video: "https://imdb-video.media-imdb.com/vi3381510681/1434659607842-pgv4ql-1652773206518.mp4?Expires=1696139000&Signature=TNFNS5z33csT1j7KdAQwBM0784lTfQlfFiIrHW2EK~jI2M8vgAZHZBoCuwYL0aSMiomPhV7xqhIesbr-IKv-xiBcmlv3~-Zn5brnpcrTspVN4aQA1sjMQnw7fuaqAGMXQQzYwMVZwf0ojUH2zK3MyhU-E~rUiBsWBIti2lVcZkcBQE2haMOScsT86fd4oAz-8-ehbo4km8Z5T4EUmne4erY85lRTwp5dWAJW8ekeDQlM4eVVaMcFxrhz8Jyvin5gcGtT2zTg0~mRP0gFFvRVcAPTPGUQWJDSMnKklzEkhHaRaXyc-Ipz5mwvbusm3aXk8lmKyHH4yGbXgqxv0zP5Rw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
        },
    ];
    return(
        <CarouselComponent data={carouselData} />
    );
}