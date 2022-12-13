import React, { useState, useEffect } from 'react'
import './Feed.css'
import Post from './Post'
import TweetBox from './TweetBox'

function Feed() {
  const [posts, setPosts] = useState([])


  return (
    <div className='feed'>
        <div className="feed__header">
        <h2>Home</h2>
        </div>

        <TweetBox/>

        <div className="active__posts">

      
<Post
displayName='Slovakia'
username= 'GovernmentOfSlovakia'
verified= {true}
text='We are banning Shopping carts ( we love you Tony )'
avatar='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAR4AAACwCAMAAADudvHOAAAA/1BMVEXuHCX///8LTqL2GRwUUKPtAADuFyHvLTTtAA3uDRnyZ2v2m54APJvuHCYAOpoARZ7uEx7tAAsAQZ3d5fH5urz4+/35tLcAUaoAPpsASaDzc3b94uP6wML82tvtBxUARJ71jZD0fH/+6uv7ycr3oqX/+PgANZj4qqzwSk76x8jxUFXwP0T0hYj95uf70NGWrNHR3OymuNfyYGTI1OdXe7dLRo9wjcBuP4DxWF33n6LwNTvvKC+8yuKIoMqtvtrq7/ZjgbotXKh+l8aJOXKnMl7WJDzIKUk8Z67+FhEmS5p5PXtURY2LOG+wL1jNKEadNmr/EgC/LFHNJDtqaKIyYaq1eVW+AAAIsklEQVR4nO2dCXPaOBSAbUAO5gg2IeEIOEASSAKhucOGnLRpYNtu293+/9+ykmwIIJABia1XvG9mZ9qgzKJvnvSeDruaDnDQfvcXCDaghwvo4QJ6uIAeLqCHC+jhAnq4gB4uoIcL6OECeriAHi6ghwvo4QJ6uIAeLqCHC+jhAnq4gB4uoIcL6OECeriAHi6ghwvo4QJ6uIAeLqCHC+jhAnq4gB4uoIcL6OECeriAHi6ghwvo4SKop2RuyOJQTofkIqhnHxmSQCrqyaCkxsN0TAv33bJMx+I21NCunA7JRVBPHfHtxCqx9lGjcXJRaJ4YfD0tOR2Si6CeuM3tczT+3vSCHz7oWOybrAZBPU2H22frZNjy0G9wZQR7shIE9RT4ejRrOOHu8oehhnZEu7IKBPVcmD6dHk64GR899h+iXVkFgnpO/IZMcdCyHOW3jJZFu7IKBPU0+OloZG5u+8SZUxHsyUoQ1LPho8eMDVre+bUsiHZlFQjq4ReFeGo+8hpWfUahZl4I92UFiOnxy9aa0fFSl1/i0qy2hN5IR1CPT17HQVF1W+776jni/69+D2J6qj7pCKeuktvSZ/WB46whoTfSEdTDriks5IxOwmjfbTm2+jCiiJmojTsJvZGOFlmWxL2unzIx4VT2Cx2EHMvr/6AY9lYfePEeRajRLDEVgdHBrR5SS3+d1aCFlqV2OW3CpZl8N9Nsb+AQIRy4egrkz7aTvLsoF8l01GH0JPEk/pBe+uushuX1bGI9JUbPewI6PC21josZb1XRyhT3W6XqcAnGVkEG/uyDWnparJ73NToXNuWR1eu5OnpqZ9PS9bz5mU15Dh5z5zmJXZOBQPRgPccS9USxnkeF9GzpelGiHvsU60lI7JoMpOtZeu4heu7V0ZN4mrbHNa8ednuD7JwppmeHrXu8hXe1lTkoVwqxC68sLMdihWa8nil5azDGjqtnU2LXZLC8nhzWU2cWFWZBP2zF2x1cE9pRxzSRtx92YZumQwpF5y5WL03bKCKrs0t19KSn6rHaBQvZ5rDzg+3C2HA0GSZCneYdGz1q6dnb1vWDKUtScywuWD1UkcNWzeQcUCE9KaznD98Njel6pkH0nKmjJ4/1xGXq2cd61Mlc0vUcKxc95bHqLumwDmbrMSbubFA9akXPuB6ncuFlrfcDjCl68IeWg1CyMn4pgZwYbqkTPSFGD6rjmueg0HDI1lfUwVXPSN2D8F8cJ2qTz6yjCql9CiajR53oYfXYnorDU1wyx3HNTPAuXsTJnyvNcrxeHBTOE1dayBUNhfREGD2LHpOfqK5n/HqP01xMz9Ga6akI6dkBPWutR2xwqaenInNqVk/PePSM3EP1Drl2dna8M/Z9/MeJo67JxK6enspYYWcfYC+lnXKsoaEhnrL28Ad28igWz5zqkwsNBfU0J8rCnbaB62XTIOuKJFlZJN8XFfSv5IeGZUYR6hSKBZX1sFWz5iDmOtTMJalhTjRWrO5JwYYGD7IVP2UzdXk9ZDNVneghx4B+d7kX0rOr1CEyud/je2NwAT3kCoJCF1gSj3PcN51fD73D2k1J7JoMBM65Hua5mTq3Hnp34SovsWsyENhMfdb977rPr8cht+IjEnsmBYG652WeXs+tB9V1/SloU4+InjQ5B/SbfObX0wrgQYWIHnI9jL1cuKyeaBCvFgpFz4c55uZ59dB7QTdBm5lF9OSvmE0Jlh/x++7V1cNlrOejsazr2y/y+iUJAT10UXrAHV1W+GM+sZfPpxP9Tz1ukiNTT+AWpGJ6EpfTHhsYIfzazw4aZ681TqAZSRyJH4K2pBDTk+riPjVmdzr8OTvavN+Z3ZTu4r8FbuoRG1yk8pn9JJL1mp1ob80cX2RsPQVvbInpIaOr+p67jHDYsvB/g/HCtL8OD+LKbTm0RR/mCtx6NCSoJ3Wjj1wk6L1+vO73r//83KOCel+Y9tmvNH+Fo99uScuvnYEu+tzOS/DGlpgeenm35L6ExbJus+5gyvb/whbCnyaHFvnoFQdM71vIa5j97qV7G9eElzWhr7IaBPXgytA9zbOS70kqRLptTf2F657Wux1p+IX6sckB2XMAg0dQDz2uIAsLozMWK9nvPz5OCR78wc9ROyTdk/FFdsK2gpfVQ8J6co86fcFBuD/+8+zfU+3g8Pk5/kH2tucGT+B2wiiCekIRncw+4yGxENlPYbIaDWJWD4nrSZxjP5XPS9vBfshOj34TyOAR1kMXXod9/2Yzyf+jB3K5RRHWkyYrC5EnaWpbwVxPUMSjh3bveW/ZX98ktcFjLXC7zC7ievJvuH/by3YvRTaNnoI58YRk6HFrw7Mla97UEzm/UVlPhDyyrZ8vNf3k6K8GcTnhIkFPKPSyTeq6JcreGikLtgK4Uh8gRc8eORHUrxadniObD3TaCmjWIkjR404/+tuCU0iiu5TV/xI5eiK1exIHLwv5yZHdIr0b0ILQhWzcyYC+xmj71wJ+0nREHiBJX2A1zNwcXxDDJjd0t9/mnWYjmzR2/O9PKYJh0hvMV7n5CkQ6K6+PHfKE9imdS+YqYmhGn/IKDoVxx9c89WE+dUlasq+YUBrDfWP3Zd6nkEm/kFWs/7v6lMN9z9zTGzdZ1+ikrDfXzg72495XeajNDKB8+t690bKGdrAf9xW7Z5EZGX7zjSzR9eqd7316JUk6G+6r+Lq5KQGUStGMpRf9/lkGdbHsuhtAv5gUVruioaOX2XeCrhEo5j7Sdp5Pj9aIiReazvXdhu+TGGrjGO4/OvHUfZ+i9+imMs3nazuwBhiDANp63qSCUunuths6R2uZsSZIRjXvnWpnV5v5VO7GnXT0sm35vT99PTDQSWkgaCCnuAGhM8RClcHLRNxx1V7rhMUSHXl0u1pBvo90rR1Ic4ugw7K9nmWyDwbaqGM51pqXOrMxkOZA5AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADA/4V/ATUxUCRf/a3+AAAAAElFTkSuQmCC'
image=''
/>       
        <Post
        displayName='Tony Stark'
        username= 'ironman'
        verified= {true}
        text='We should ban shopping carts!'
        avatar=' https://wellgroomedgentleman.com/media/images/Tony_Stark_Beard_with_Quiff_Hairstyle.width-800.jpg '
        image=''
        />       
        <Post
        displayName='Joe Schmo'
        username= 'joe.schmo'
        verified= {false}
        text='Tony Stark says so many smart things'
        avatar='https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Freightliner_M2_106_6x4_2014_%2814240376744%29.jpg/1200px-Freightliner_M2_106_6x4_2014_%2814240376744%29.jpg'
        image=''
        />       
        <Post
        displayName='John Doe'
        username= 'jDoe23742'
        verified= {false}
        text='I wont speak to anyone that even REMOTELY agrees with Tony stark!'
        avatar='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Peace_symbol_%28bold%29.svg/1200px-Peace_symbol_%28bold%29.svg.png'
        image=''
        />       
        <Post
        displayName='Katniss'
        username= 'kEverdeen'
        verified= {true}
        text='Unlike Tony Stark, I actually value shopping carts.'
        avatar='https://assets.teenvogue.com/photos/564f969c016eb9ab3c7a406a/1:1/w_2891,h_2891,c_limit/heroines-00.jpg'
        image=''
        />       
        <Post
        displayName='Walter White'
        username= 'officialWalterWhite'
        verified= {true}
        text='Always do what makes you happy!'
        avatar='https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Walter_White_S5B.png/220px-Walter_White_S5B.png'
        image=''
        />       
        <Post
        displayName='Darth Vader'
        username= 'realDarthVader'
        verified= {true}
        text='Shopping carts are amazing!'
        avatar='https://www.scifishop.se/wp-content/uploads/2013/12/darth-vader-cool.jpg'
        image=''
        />       
        <Post
        displayName='M. Simpson'
        username= 'marge'
        verified= {false}
        text='Who watches cartoons anyway'
        avatar='https://media.herworld.com/public/Marge%20Simpson%20on%20her%20batty%20blue%20beehive%20%20the%20secret%20to%20eternal%20youth!%20b.png?compress=true&quality=80&w=600&dpr=2.6'
        image=''
        />       
        <Post
        displayName='Not Steve'
        username= 'steve'
        verified= {false}
        text='Why wont ANYONE listen to my important ideas??'
        avatar='https://i.pinimg.com/736x/4b/a8/dd/4ba8dd9278912e43da4962243d0b60b8.jpg'
        image=''
        />       
        <Post
        displayName='Tommy Shelby'
        username= 'topBlinder'
        verified= {true}
        text='Buy my fitness course to get abs.'
        avatar='https://i2-prod.liverpoolecho.co.uk/incoming/article23503282.ece/ALTERNATES/s1200c/1_Peaky-Blinders.jpg'
        image=''
        />       
        <Post
        displayName='Aunt Pol'
        username= 'PollyGray'
        verified= {false}
        text='Dont listen to Tommy'
        avatar='https://ichef.bbci.co.uk/images/ic/1200x675/p07l1zgq.jpg'
        image=''
        />       
        <Post
        displayName='Slovakia'
        username= 'GovernmentOfSlovakia'
        verified= {true}
        text='We are banning Napoleon Bonaparte from invading Slovakia'
        avatar='data:image/png;base64,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'
        image=''
        />       
        <Post
        displayName='Napoleon Bonaparte'
        username= 'realBonaparte'
        verified= {true}
        text='Guess whos back!'
        avatar='https://www.biography.com/.image/t_share/MTc5OTkzMzI0ODg5ODQzMDMy/gettyimages-544266826.jpg'
        image=''
        />       
        <Post
        displayName='Snape'
        username= 'SnapeOfHogwarts'
        verified= {true}
        text='I have always been quite fond of Gandhi'
        avatar='https://www.looper.com/img/gallery/severus-snapes-entire-backstory-explained/intro-1595622776.jpg'
        image=''
        />
                </div>


    </div>
  )
}

export default Feed