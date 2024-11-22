import { gql } from 'graphql-tag';
import { request } from 'graphql-request';

const MASTER_URL = `https://ap-south-1.cdn.hygraph.com/content/${process.env.NEXT_PUBLIC_HYGRAPH_KEY}/master`;

export const getCourseList = async () => {
  const query = gql`
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
  `;

  try {
    const result = await request(MASTER_URL, query);
    return result;
  } catch (error) {
    console.error('Error fetching course list:', error);
    throw error;
  }
};


