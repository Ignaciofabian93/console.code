import { useRouter } from "next/navigation";

const useNavigate = () => {
  const router = useRouter();

  const navigate = (path: string) => {
    router.push(path);
  };

  const back = () => {
    router.back();
  };

  const replacePage = (path: string) => {
    router.replace(path);
  };

  return { navigate, back, replacePage };
};

export default useNavigate;
