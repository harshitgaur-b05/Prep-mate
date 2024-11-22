import {gql} from "graphql-request"
const MASTER_URL="https://ap-south-1.cdn.hygraph.com/content/"+NEXT_PUBLIC_HYGRAPH_KEY+"/master"

export  const getCourseList=async ()=>{
    const query=gql`
    query courseList {
  courseLists {
    banner {
      url
    }
    free
    id
    name
    totalChapter
    tags
  }
}
  `
  const result=await request(MASTER_URL,query)
}