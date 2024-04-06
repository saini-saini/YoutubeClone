import axios from 'axios'
console.log(process.env.REACT_APP_YT_API_KEY)


const request = axios.create({
   baseURL: 'https://youtube.googleapis.com/youtube/v3/',
   params: {
      key: "AIzaSyC7DLt6Ff-BNR8DqxOzKUxhR7ht33Nhlbw"
   },
})

export default request