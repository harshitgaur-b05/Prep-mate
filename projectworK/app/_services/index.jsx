import { gql } from 'graphql-tag';
import { request } from 'graphql-request';

const MASTER_URL = `https://ap-south-1.cdn.hygraph.com/content/${process.env.NEXT_PUBLIC_HYGRAPH_KEY}/master`;

// Fetch the list of courses
export const getCourseList = async () => {
  const query = gql`
query courseList {
  courseLists(first: 20, orderBy: publishedAt_ASC) {
    banner {
      url
    }
    free
    id
    name
    totalChapter
    tags
    slug
  }
}
  `;

  try {
    const result = await request(MASTER_URL, query);
    return result.courseLists;
  } catch (error) {
    console.error("Error fetching course list:", error);
    throw error;
  }
};

// Fetch course details by ID
export const getCourseById = async (courseId) => {
  const query = gql`
    query GetCourseById($slug: String!) {
  courseList(where: { slug: $slug }) {
    banner {
      url
    }
    chapter {
      ... on Chapter {
        id
        name
        video {
          url
        }
      }
    }
    id
    free
    description
    name
    slug
    sourceCode
    tags
    totalChapter
  }
}

  `;

  try {
    const result = await request(MASTER_URL, query, { slug: courseId });
    return result.courseList;
  } catch (error) {
    console.error("Error fetching course by ID:", error);
    throw error;
  }
};

// Export functions as named exports
export default {
  getCourseList,
  getCourseById,
};


