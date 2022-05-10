import { GetServerSidePropsContext } from 'next';
import { ClientSafeProvider, getProviders, signIn } from 'next-auth/react';

const SignIn = ({
  providers,
  callbackUrl,
}: {
  providers: ClientSafeProvider[];
  callbackUrl: string;
}) => {
  return (
    <>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button
            onClick={() => signIn(provider.id, { callbackUrl: callbackUrl })}
          >
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </>
  );
};

export default SignIn;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const providers = await getProviders();
  return {
    props: { providers, callbackUrl: context.query.callbackUrl },
  };
}
