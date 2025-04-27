
function mostrarFormulario(formulario) {
    document.getElementById('formulario-facial').classList.add('hidden');
    document.getElementById('formulario-sobrancelha').classList.add('hidden');
    
    if (formulario === 'facial') {
        document.getElementById('formulario-facial').classList.remove('hidden');
    } else {
        document.getElementById('formulario-sobrancelha').classList.remove('hidden');
    }
}

function gerarPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    let content = '';
    if (!document.getElementById('formulario-facial').classList.contains('hidden')) {
        content = document.getElementById('formFacial').innerText;
    } else {
        content = document.getElementById('formSobrancelha').innerText;
    }

    doc.text(content, 10, 10);
    doc.save('anamnese.pdf');
}
