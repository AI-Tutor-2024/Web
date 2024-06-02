"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect } from "react";

const Dashboard = () => {
  const { data: session } = useSession();

  useEffect(() => {
    if (session && session.accessToken) {
      const accessToken = session.accessToken;
      const email = session.user?.email;
      const providerId = 'google'; // 구글 로그인 사용 시 providerId는 'google'

      fetch('http://localhost:3000', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify({
          email: email,
          providerId: providerId
        })
      })
      .then(response => response.json())
      .then(data => {
        console.log('Login success:', data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
    }
  }, [session]);

  if (session) {
    return (
      <>
        Signed in as {session.user?.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
};

export default Dashboard;