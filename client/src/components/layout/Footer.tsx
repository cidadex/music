export function Footer() {
  return (
    <footer id="contato" className="bg-[#0b0c10] pt-16 pb-8 border-t border-gray-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="pt-8 flex flex-col items-center">
           <div className="w-1 h-1 rounded-full bg-gray-700 mb-6"></div>
           <p className="text-gray-600 text-xs tracking-wider uppercase mb-4">© Copyright {new Date().getFullYear()} - Powered by IGAPÓ MUSIC</p>
           
           <div className="flex items-center gap-2 text-gray-500 text-[10px] uppercase tracking-widest">
             <span>Desenvolvido por:</span>
             <a href="https://sejan1.com.br" target="_blank" rel="noopener noreferrer" className="opacity-50 hover:opacity-100 transition-opacity">
               <img src="/logo-n1.png" alt="Seja N1" className="h-4 w-auto" />
             </a>
           </div>
        </div>
      </div>
    </footer>
  );
}
