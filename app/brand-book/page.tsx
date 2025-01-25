import { TreeToScriptBrandBook } from "./brand-book";

function Component() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">TreeToScript</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <TreeToScriptBrandBook />
        </div>
      </main>
    </div>
  );
}

export default function Page() {
  return <Component />;
}
