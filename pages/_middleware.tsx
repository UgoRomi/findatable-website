import { withAuth } from 'next-auth/middleware';

export default withAuth({
  pages: {
    signIn: '/auth/signin',
  },
  callbacks: {
    authorized({ req, token }) {
      return req.page.name === '/' || !!token; // If there is a token, the user is authenticated
    },
  },
});
