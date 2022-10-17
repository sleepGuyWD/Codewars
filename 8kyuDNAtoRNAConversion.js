/*
Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

Create a function which translates a given DNA string into RNA.
*/
function DNAtoRNA(dna) {
  let rna = []
  let splitted = dna.split('')
  for (i = 0; i < splitted.length; i++) {
    splitted[i] == 'T' ? rna.push('U') : rna.push(splitted[i])
  }
  return rna.join('')
}