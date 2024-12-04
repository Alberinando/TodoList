import { getTasks } from '@/app/tasks/actions';
import Link from 'next/link';

export default async function TodoListPage() {
  const tasks = await getTasks();
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full mx-auto bg-white shadow-xl rounded-lg p-8">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">Todo List</h1>
        <ul className="space-y-4">
          {tasks.map((task) => (
            <li key={task.id} className="flex justify-between items-center p-4 bg-gray-100 hover:bg-gray-200 rounded-lg shadow-sm transition duration-200">
              <Link href={`/tasks/${task.id}`} className="text-lg text-blue-600 font-semibold hover:text-blue-800">
                {task.title}
              </Link>
              <button className='text-red-800'>
                Delete
              </button>
            </li>
          ))}
        </ul>
        <div className="mt-6 text-right">
          <Link
            href="/tasks/new"
            className="inline-block text-white bg-blue-600 hover:bg-blue-700 font-semibold py-2 px-6 rounded-lg shadow-md transition duration-200"
          >
            Create New Task
          </Link>
        </div>
      </div>
    </div>
  );
}
