import { Head, Link, usePage } from '@inertiajs/react';
import { dashboard, login, register } from '@/routes';
import id from '@/locales/id';

export default function Welcome() {
    const { auth } = usePage().props;

    return (
        <>
            <Head title={id.appName} />
            <main className="flex min-h-screen flex-col items-center justify-center bg-slate-50 px-6 py-16 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
                <section className="w-full max-w-3xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-12 dark:border-slate-800 dark:bg-slate-900">
                    <p className="text-sm font-semibold tracking-wide text-blue-700 dark:text-blue-300">
                        {id.appName}
                    </p>
                    <h1 className="mt-5 text-3xl font-semibold tracking-tight sm:text-5xl">
                        {id.welcomeTitle}
                    </h1>
                    <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300">
                        {id.welcomeDescription}
                    </p>
                    <p className="mt-8 rounded-xl bg-blue-50 px-4 py-3 text-sm text-blue-900 dark:bg-blue-950 dark:text-blue-100">
                        {id.status}
                    </p>
                    <nav
                        className="mt-8 flex flex-wrap gap-3"
                        aria-label="Navigasi utama"
                    >
                        {auth.user ? (
                            <Link
                                href={dashboard()}
                                className="rounded-lg bg-blue-700 px-5 py-3 text-sm font-medium text-white hover:bg-blue-800"
                            >
                                {id.dashboard}
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={login()}
                                    className="rounded-lg bg-blue-700 px-5 py-3 text-sm font-medium text-white hover:bg-blue-800"
                                >
                                    {id.signIn}
                                </Link>
                                <Link
                                    href={register()}
                                    className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-medium hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800"
                                >
                                    {id.signUp}
                                </Link>
                            </>
                        )}
                    </nav>
                </section>
            </main>
        </>
    );
}
