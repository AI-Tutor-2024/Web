import React from "react";
import Image from "next/image";
import Link from "next/link";

const GoogleLoginCTA = () => {
  const handleGoogleLogin = () => {
    const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
    const redirectUri = process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI;

    if (!clientId || !redirectUri) {
      console.error('Google 클라이언트 ID 또는 리디렉션 URI가 설정되지 않았습니다.');
      return;
    }

    const url = new URL('https://accounts.google.com/o/oauth2/auth');
    url.searchParams.append('client_id', clientId);
    url.searchParams.append('redirect_uri', redirectUri);
    url.searchParams.append('response_type', 'token');
    url.searchParams.append('scope', 'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile');

    window.location.href = url.toString();
  };

  return (
    <Link href = "/home">
    <button
      className="h-[57px] w-[264px] bg-mainWhite flex flex-col justify-center items-center rounded-md"
      onClick={handleGoogleLogin}
    >
      <div className="flex flex-row gap-3">
        <Image src="/google.svg" alt="google" width={24} height={24} />
        <p className="text-bgDeepGray flex flex-col justify-center text-center items-center">
          Google계정으로 계속하기
        </p>
      </div>
    </button>
    </Link> 
  );
};

export default GoogleLoginCTA;
