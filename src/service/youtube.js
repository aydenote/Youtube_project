class Youtube{
    constructor(key){
        this.key = key;
        this.getRequestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
    }
    async mostPopular(){
       const response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&location=korea&key=${this.key}`, this.getRequestOptions);
        const result = await response.json();
        return result.items;
    }

    async search(text){
       const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${text}}&type=video&key=${this.key}`, this.getRequestOptions);
        const result= await response.json();
        return result.items.map(item => ({ ...item, id: item.id.videoId }));
      // 기존에는 오브젝트의 ID로 Data를 수신했으나, privitive type으로 변환.
    }
}

export default Youtube;