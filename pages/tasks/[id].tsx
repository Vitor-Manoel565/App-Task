import {useRouter} from 'next/router';

const Tasks = () => {
  const router = useRouter();
  const { id } = router.query;

  return <div>Task {id}</div>;
};

export default Tasks;