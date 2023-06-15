import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Можливо тут зробите щось корисне ○♣○</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">Ви успішно авторизувались! Вітаю ♥ ти згадав пароль)</div>
                    </div>

                    <a href="/posts" className="btn btn-success">Створити петицію</a><br/>
                    <a href="/posts/info" className="btn btn-success">Переглянути петицію</a>
                    <a href="/data" className="btn btn-success">Test page</a>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
