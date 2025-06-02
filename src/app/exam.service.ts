import { Injectable } from '@angular/core';
@Injectable({ providedIn: 'root' })
export class ExamService {
  sets: { [key: string]: { subject: string, questions: any[] } } = {
    set1:{
      subject: 'Cell: The Unit of Life',
      questions: [
        {
          question: 'Who discovered the cell in cork tissue?',
          options: ['Leeuwenhoek', 'Schleiden', 'Robert Hooke', 'Schwann'],
          answer: 'Robert Hooke'
        },
        {
          question: 'Which scientist first observed living cells under a microscope?',
          options: ['Schleiden', 'Schwann', 'Anton van Leeuwenhoek', 'Robert Brown'],
          answer: 'Anton van Leeuwenhoek'
        },
        {
          question: 'The term "cell" was derived from the Latin word “cellula” which means:',
          options: ['Small room', 'Hollow tube', 'Empty space', 'Nucleus'],
          answer: 'Small room'
        },
        {
          question: 'The cell theory was proposed by:',
          options: ['Robert Brown and Robert Hooke', 'Schleiden and Schwann', 'Leeuwenhoek and Virchow', 'Schwann and Virchow'],
          answer: 'Schleiden and Schwann'
        },
        {
          question: 'The idea “Omnis cellula e cellula” was given by:',
          options: ['Schleiden', 'Schwann', 'Virchow', 'Robert Brown'],
          answer: 'Virchow'
        },
        {
          question: 'Which is not a part of the modern cell theory?',
          options: ['All organisms are composed of cells', 'Cells arise spontaneously from non-living matter', 'All cells arise from pre-existing cells', 'Cell is the basic unit of life'],
          answer: 'Cells arise spontaneously from non-living matter'
        },
        {
          question: 'Which of the following organisms is unicellular?',
          options: ['Amoeba', 'Hydra', 'Earthworm', 'Mushroom'],
          answer: 'Amoeba'
        },
        {
          question: 'In multicellular organisms, cells are:',
          options: ['Independent and similar', 'Identical in function', 'Specialized and coordinated', 'Randomly organized'],
          answer: 'Specialized and coordinated'
        },
        {
          question: 'Which of the following is not found in prokaryotic cells?',
          options: ['Ribosome', 'Plasma membrane', 'DNA', 'Nuclear envelope'],
          answer: 'Nuclear envelope'
        },
        {
          question: 'The genetic material in prokaryotic cells is:',
          options: ['Enclosed in a nucleus', 'Linear and histone-bound', 'Circular and present in the nucleoid', 'Located in the mitochondria'],
          answer: 'Circular and present in the nucleoid'
        },
        {
          question: 'The most abundant cell type in the human body is:',
          options: ['Muscle cells', 'Nerve cells', 'RBCs', 'WBCs'],
          answer: 'RBCs'
        },
        {
          question: 'Cell wall is absent in:',
          options: ['Bacteria', 'Plant cells', 'Animal cells', 'Fungi'],
          answer: 'Animal cells'
        },
        {
          question: 'Which cell structure is present in both prokaryotic and eukaryotic cells?',
          options: ['Nucleus', 'Mitochondria', 'Ribosomes', 'Golgi apparatus'],
          answer: 'Ribosomes'
        },
        {
          question: 'Which of these is a membrane-bound organelle?',
          options: ['Nucleoid', 'Ribosome', 'Mitochondria', 'Mesosome'],
          answer: 'Mitochondria'
        },
        {
          question: 'Which of the following kingdoms include prokaryotic organisms?',
          options: ['Protista', 'Monera', 'Fungi', 'Plantae'],
          answer: 'Monera'
        },
        {
          question: 'Which component controls cell activity in eukaryotic cells?',
          options: ['Cell membrane', 'Mitochondria', 'Nucleus', 'Lysosome'],
          answer: 'Nucleus'
        },
        {
          question: 'Which of the following is a feature of prokaryotic cells?',
          options: ['Membrane-bound nucleus', 'Mitochondria present', 'Cell division by mitosis', 'Simple cell organization'],
          answer: 'Simple cell organization'
        },
        {
          question: 'Which of the following statements is true for eukaryotic cells?',
          options: ['Lack of ribosomes', 'DNA is free-floating', 'Presence of membrane-bound organelles', 'Do not have cytoplasm'],
          answer: 'Presence of membrane-bound organelles'
        },
        {
          question: 'Who discovered the nucleus in the cell?',
          options: ['Schleiden', 'Robert Brown', 'Schwann', 'Rudolf Virchow'],
          answer: 'Robert Brown'
        },
        {
          question: 'Which of the following is absent in prokaryotic cells but present in eukaryotic cells?',
          options: ['Plasma membrane', 'DNA', 'Nucleus', 'Ribosomes'],
          answer: 'Nucleus'
        }
      ]
    },
    set2: {
      subject: 'Cell: The Unit of Life (Advanced)',
      questions: [
        {
          question: 'Which of the following organelles is not a part of the endomembrane system?',
          options: ['Endoplasmic Reticulum', 'Golgi Complex', 'Lysosomes', 'Peroxisomes'],
          answer: 'Peroxisomes'
        },
        {
          question: 'Histones are absent in which of the following organisms?',
          options: ['E. coli', 'Yeast', 'Chlamydomonas', 'Amoeba'],
          answer: 'E. coli'
        },
        {
          question: 'The function of smooth endoplasmic reticulum in liver cells is to:',
          options: ['Synthesize proteins', 'Detoxify drugs and poisons', 'Form lysosomes', 'Transport RNA'],
          answer: 'Detoxify drugs and poisons'
        },
        {
          question: 'Which of the following cell organelles is semi-autonomous?',
          options: ['Lysosomes', 'Peroxisomes', 'Mitochondria', 'Golgi apparatus'],
          answer: 'Mitochondria'
        },
        {
          question: 'Which structure of the cell is responsible for protein synthesis?',
          options: ['Mitochondria', 'Ribosomes', 'Lysosomes', 'Nucleus'],
          answer: 'Ribosomes'
        },
        {
          question: 'Which of the following is a feature of prokaryotic DNA?',
          options: ['Linear and histone-bound', 'Circular and histone-free', 'Segmented chromosomes', 'Present in the nucleolus'],
          answer: 'Circular and histone-free'
        },
        {
          question: 'The main function of the nuclear pore complex is:',
          options: ['DNA replication', 'Protein synthesis', 'Transport of RNA and proteins', 'Chromosome separation'],
          answer: 'Transport of RNA and proteins'
        },
        {
          question: 'Cristae are structures found in:',
          options: ['Golgi apparatus', 'Endoplasmic reticulum', 'Nucleus', 'Mitochondria'],
          answer: 'Mitochondria'
        },
        {
          question: 'Which of the following statements is incorrect regarding plasma membrane?',
          options: ['It is selectively permeable', 'It is made up of a lipid bilayer', 'It allows all solutes to freely pass', 'It contains proteins'],
          answer: 'It allows all solutes to freely pass'
        },
        {
          question: 'Which statement best describes the fluid mosaic model?',
          options: ['Rigid arrangement of proteins in the bilayer', 'Proteins embedded like a mosaic in a phospholipid bilayer', 'Proteins surrounding a lipid core', 'Lipids embedded in a protein matrix'],
          answer: 'Proteins embedded like a mosaic in a phospholipid bilayer'
        },
        {
          question: 'Which of the following cell structures contains enzymes for intracellular digestion?',
          options: ['Peroxisomes', 'Ribosomes', 'Lysosomes', 'Golgi apparatus'],
          answer: 'Lysosomes'
        },
        {
          question: 'Nucleolus is the site of synthesis of:',
          options: ['mRNA', 'tRNA', 'rRNA', 'DNA'],
          answer: 'rRNA'
        },
        {
          question: 'Which statement is true for eukaryotic cells but not prokaryotic?',
          options: ['DNA is present', 'Cell wall may be present', 'Membrane-bound organelles are present', 'Ribosomes are present'],
          answer: 'Membrane-bound organelles are present'
        },
        {
          question: 'The bacterial cell wall is made up of:',
          options: ['Cellulose', 'Peptidoglycan', 'Chitin', 'Pectin'],
          answer: 'Peptidoglycan'
        },
        {
          question: 'Which one of the following structures is common to both plant and animal cells?',
          options: ['Plastids', 'Large central vacuole', 'Centrioles', 'Mitochondria'],
          answer: 'Mitochondria'
        },
        {
          question: 'Tonoplast is associated with:',
          options: ['Nucleus', 'Vacuole', 'Mitochondria', 'Golgi body'],
          answer: 'Vacuole'
        },
        {
          question: 'Which of the following statements about the Golgi apparatus is false?',
          options: ['It is involved in glycosylation', 'It helps in lipid metabolism', 'It is made up of cisternae', 'It plays a role in protein sorting'],
          answer: 'It helps in lipid metabolism'
        },
        {
          question: 'Plasmodesmata in plant cells are functionally equivalent to:',
          options: ['Centrioles in animal cells', 'Desmosomes in animal cells', 'Gap junctions in animal cells', 'Cilia in protozoa'],
          answer: 'Gap junctions in animal cells'
        },
        {
          question: 'Which of the following structures does not contain DNA?',
          options: ['Mitochondria', 'Chloroplast', 'Nucleolus', 'Nucleus'],
          answer: 'Nucleolus'
        },
        {
          question: 'Which of the following is not a characteristic of mitochondria?',
          options: ['They have their own DNA', 'They are involved in aerobic respiration', 'They have a single membrane', 'They can divide independently'],
          answer: 'They have a single membrane'
        }
      ]
    },
    set3: {
      subject: 'Cell: The Unit of Life (Advanced - First 10 Pages)',
      questions: [
        {
          question: 'Which of the following correctly differentiates prokaryotic and eukaryotic cells?',
          options: [
            'Prokaryotes have membrane-bound organelles, eukaryotes do not',
            'Eukaryotes lack nuclear envelope, prokaryotes have it',
            'Eukaryotes have histone proteins associated with DNA, prokaryotes do not',
            'Prokaryotic DNA is linear, eukaryotic DNA is circular'
          ],
          answer: 'Eukaryotes have histone proteins associated with DNA, prokaryotes do not'
        },
        {
          question: 'Which scientist first observed free-living cells in pond water?',
          options: ['Robert Hooke', 'Schwann', 'Anton van Leeuwenhoek', 'Virchow'],
          answer: 'Anton van Leeuwenhoek'
        },
        {
          question: 'The correct sequence of discoveries is:',
          options: [
            'Cell theory → Living cells → Nucleus',
            'Nucleus → Living cells → Cell theory',
            'Living cells → Nucleus → Cell theory',
            'Cell theory → Nucleus → Living cells'
          ],
          answer: 'Living cells → Nucleus → Cell theory'
        },
        {
          question: 'Which of the following features is shared by archaea and eukarya but not bacteria?',
          options: ['Circular DNA', 'Histone-associated DNA', '70S ribosomes', 'Peptidoglycan cell wall'],
          answer: 'Histone-associated DNA'
        },
        {
          question: 'Which of the following is NOT a tenet of the cell theory?',
          options: [
            'All living organisms are composed of cells',
            'All cells arise from pre-existing cells',
            'Cells can survive independently of their environment',
            'Cell is the structural and functional unit of life'
          ],
          answer: 'Cells can survive independently of their environment'
        },
        {
          question: 'Which one of the following statements about prokaryotic cells is incorrect?',
          options: [
            'They have a nucleoid',
            'They possess 80S ribosomes',
            'They lack membrane-bound organelles',
            'They divide by binary fission'
          ],
          answer: 'They possess 80S ribosomes'
        },
        {
          question: 'Which of the following lacks a true nucleus and membrane-bound organelles?',
          options: ['Mycoplasma', 'Amoeba', 'Chlamydomonas', 'Paramecium'],
          answer: 'Mycoplasma'
        },
        {
          question: 'Which discovery contradicted the spontaneous generation theory and supported “Omnis cellula e cellula”?',
          options: ['Hooke’s cork cell discovery', 'Virchow’s theory', 'Leeuwenhoek’s observations', 'Brown’s nucleus discovery'],
          answer: 'Virchow’s theory'
        },
        {
          question: 'Identify the only membrane-bound organelle found in prokaryotes:',
          options: ['Nucleus', 'Mesosome', 'Mitochondria', 'Golgi apparatus'],
          answer: 'Mesosome'
        },
        {
          question: 'Which scientist is incorrectly paired with their contribution?',
          options: [
            'Robert Brown – Nucleus',
            'Schleiden – Plants composed of cells',
            'Schwann – Animal cells',
            'Leeuwenhoek – Cell theory'
          ],
          answer: 'Leeuwenhoek – Cell theory'
        },
        {
          question: 'Which of the following organisms are acellular?',
          options: ['Bacteria', 'Viruses', 'Fungi', 'Protists'],
          answer: 'Viruses'
        },
        {
          question: 'Which structure is present in all prokaryotes?',
          options: ['Cell wall made of cellulose', 'Membrane-bound nucleus', 'Peptidoglycan cell wall', 'Double membrane organelles'],
          answer: 'Peptidoglycan cell wall'
        },
        {
          question: 'Which is the smallest living cell discovered so far?',
          options: ['Mycoplasma', 'Virus', 'Bacteria', 'Chlamydomonas'],
          answer: 'Mycoplasma'
        },
        {
          question: 'What distinguishes a eukaryotic ribosome from a prokaryotic one?',
          options: ['Larger size and 80S sedimentation', 'Presence in the nucleus', 'Composed of DNA', 'Bound to plasma membrane'],
          answer: 'Larger size and 80S sedimentation'
        },
        {
          question: 'Which part of a prokaryotic cell is involved in respiration and energy production?',
          options: ['Plasma membrane', 'Mitochondria', 'Cell wall', 'Mesosome'],
          answer: 'Mesosome'
        },
        {
          question: 'Which statement regarding viruses is correct?',
          options: [
            'They have both DNA and RNA in all cases',
            'They have a cellular structure',
            'They can reproduce independently',
            'They are considered obligate parasites'
          ],
          answer: 'They are considered obligate parasites'
        },
        {
          question: 'Which of the following best explains the term “cell is the structural and functional unit of life”?',
          options: [
            'All cells are structurally identical',
            'Cell functions only when part of a tissue',
            'Cell can perform all life processes independently',
            'Tissues are more functional than cells'
          ],
          answer: 'Cell can perform all life processes independently'
        },
        {
          question: 'A feature exclusive to eukaryotic cells is:',
          options: ['Plasma membrane', 'Cytoplasm', 'Compartmentalized organelles', 'DNA'],
          answer: 'Compartmentalized organelles'
        },
        {
          question: 'Which cell structure directly supports the endosymbiotic theory?',
          options: ['Ribosomes', 'Mesosomes', 'Mitochondria', 'Golgi apparatus'],
          answer: 'Mitochondria'
        },
        {
          question: 'Who added to the cell theory by stating “all cells arise from pre-existing cells”?',
          options: ['Schwann', 'Leeuwenhoek', 'Virchow', 'Hooke'],
          answer: 'Virchow'
        }
      ]
    },
    set4: {
      subject: 'Cell: The Unit of Life (PYQ/NEET Style - First 10 Pages)',
      questions: [
        {
          question: 'Which one of the following is true for a prokaryotic cell?',
          options: [
            'Nuclear envelope is present',
            'Membrane-bound organelles are absent',
            '80S ribosomes are present',
            'Histones are found associated with DNA'
          ],
          answer: 'Membrane-bound organelles are absent'
        },
        {
          question: 'The term “cell” was first coined by:',
          options: ['Leeuwenhoek', 'Robert Brown', 'Robert Hooke', 'Virchow'],
          answer: 'Robert Hooke'
        },
        {
          question: 'Which feature is *not* found in all prokaryotic cells?',
          options: ['Cell wall', 'Plasma membrane', 'Nucleoid', 'Mitochondria'],
          answer: 'Mitochondria'
        },
        {
          question: '“Omnis cellula e cellula” refers to:',
          options: [
            'Cells arise from pre-existing cells',
            'Cells can survive outside the body',
            'All cells contain DNA',
            'Cells originate from abiotic material'
          ],
          answer: 'Cells arise from pre-existing cells'
        },
        {
          question: 'Which of the following cell types is anucleated?',
          options: ['White blood cells', 'Neuron', 'Red blood cells', 'Liver cells'],
          answer: 'Red blood cells'
        },
        {
          question: 'Which organism lacks a cell wall?',
          options: ['Mycoplasma', 'E. coli', 'Nostoc', 'Chlamydomonas'],
          answer: 'Mycoplasma'
        },
        {
          question: 'Which among the following has a well-defined nucleus?',
          options: ['E. coli', 'Mycoplasma', 'Paramecium', 'Virus'],
          answer: 'Paramecium'
        },
        {
          question: 'Who proposed the modern cell theory (including “all cells arise from pre-existing cells”)?',
          options: ['Schwann and Schleiden', 'Hooke and Brown', 'Virchow', 'Leeuwenhoek'],
          answer: 'Virchow'
        },
        {
          question: 'In prokaryotic cells, the genetic material is:',
          options: [
            'Bound by nuclear envelope',
            'Bound to histones',
            'Single, circular, and without histones',
            'Multiple linear chromosomes'
          ],
          answer: 'Single, circular, and without histones'
        },
        {
          question: 'Which cell organelle is believed to be evolved via endosymbiosis?',
          options: ['Golgi body', 'Ribosome', 'Mitochondrion', 'Lysosome'],
          answer: 'Mitochondrion'
        },
        {
          question: 'Select the feature unique to eukaryotic cells:',
          options: [
            'Cell membrane',
            'Ribosomes',
            'Membrane-bound nucleus',
            'Genetic material'
          ],
          answer: 'Membrane-bound nucleus'
        },
        {
          question: 'Which of the following cells can live without a definite shape due to lack of cell wall?',
          options: ['Bacteria', 'Fungi', 'Mycoplasma', 'Algae'],
          answer: 'Mycoplasma'
        },
        {
          question: 'Which organism is incorrectly paired with its characteristic?',
          options: [
            'Amoeba – Unicellular and eukaryotic',
            'Virus – Acellular and DNA/RNA based',
            'Bacteria – Prokaryotic and cell wall-less',
            'Mycoplasma – Prokaryotic and smallest cell'
          ],
          answer: 'Bacteria – Prokaryotic and cell wall-less'
        },
        {
          question: 'Which of the following is not applicable to prokaryotes?',
          options: ['Binary fission', 'Compartmentalization', 'Plasma membrane', 'Nucleoid'],
          answer: 'Compartmentalization'
        },
        {
          question: 'Which discovery supports the idea that cell is the structural unit of life?',
          options: [
            'Observation of nucleus',
            'Cell theory by Schleiden and Schwann',
            'Discovery of mitochondria',
            'Observation of Golgi bodies'
          ],
          answer: 'Cell theory by Schleiden and Schwann'
        },
        {
          question: 'Why are viruses considered non-cellular?',
          options: [
            'They lack nucleic acids',
            'They do not contain proteins',
            'They lack cellular structure',
            'They cannot reproduce'
          ],
          answer: 'They lack cellular structure'
        },
        {
          question: 'What is a common feature between Archaea and Eukaryotes?',
          options: ['Peptidoglycan cell wall', '70S ribosomes', 'Histone association with DNA', 'Mesosomes'],
          answer: 'Histone association with DNA'
        },
        {
          question: 'Which scientist is known for coining the term “protoplasm”?',
          options: ['Dujardin', 'Purkinje', 'Hooke', 'Schwann'],
          answer: 'Purkinje'
        },
        {
          question: 'Which one of these features is found only in prokaryotic cells?',
          options: [
            'Cell wall with cellulose',
            'Ribosomes of 70S type',
            'Nuclear membrane',
            'Membrane-bound organelles'
          ],
          answer: 'Ribosomes of 70S type'
        },
        {
          question: 'Which of the following scientists did *not* contribute to the formulation of cell theory?',
          options: ['Robert Hooke', 'Schleiden', 'Schwann', 'Virchow'],
          answer: 'Robert Hooke'
        }
      ]
    }
    ,
    set5: {
      subject: 'Cell: The Unit of Life (NEET / PYQ Style - Full Chapter)',
      questions: [
        {
          question: 'Which organelle is involved in the formation of lysosomes?',
          options: ['Endoplasmic reticulum', 'Ribosomes', 'Golgi apparatus', 'Peroxisomes'],
          answer: 'Golgi apparatus'
        },
        {
          question: 'The unit of measurement used for expressing cell organelle size is:',
          options: ['Millimeter', 'Micrometer', 'Nanometer', 'Angstrom'],
          answer: 'Nanometer'
        },
        {
          question: 'Which of the following does not have a double membrane?',
          options: ['Nucleus', 'Chloroplast', 'Mitochondria', 'Lysosome'],
          answer: 'Lysosome'
        },
        {
          question: 'Cristae are found in which of the following organelles?',
          options: ['Chloroplast', 'Mitochondria', 'Golgi apparatus', 'Ribosome'],
          answer: 'Mitochondria'
        },
        {
          question: 'Which of the following statements regarding ribosomes is incorrect?',
          options: [
            'They are found in both prokaryotic and eukaryotic cells',
            'They are involved in protein synthesis',
            'They are membrane-bound organelles',
            'They may occur freely or attached to ER'
          ],
          answer: 'They are membrane-bound organelles'
        },
        {
          question: 'Which of the following is a non-membranous organelle?',
          options: ['Ribosome', 'Lysosome', 'Peroxisome', 'Endoplasmic reticulum'],
          answer: 'Ribosome'
        },
        {
          question: 'Which of the following organelles is not part of the endomembrane system?',
          options: ['Endoplasmic reticulum', 'Golgi complex', 'Lysosomes', 'Mitochondria'],
          answer: 'Mitochondria'
        },
        {
          question: 'The middle lamella in plant cells is rich in:',
          options: ['Cellulose', 'Lignin', 'Calcium pectate', 'Protein'],
          answer: 'Calcium pectate'
        },
        {
          question: 'Which of the following helps in detoxification of toxins and drugs in the liver?',
          options: ['Rough ER', 'Smooth ER', 'Lysosomes', 'Peroxisomes'],
          answer: 'Smooth ER'
        },
        {
          question: 'In which of the following, the 70S ribosomes are found?',
          options: ['Cytoplasm of eukaryotic cell', 'Mitochondria of eukaryotic cell', 'Nucleoplasm', 'Golgi apparatus'],
          answer: 'Mitochondria of eukaryotic cell'
        },
        {
          question: 'A major function of the Golgi apparatus is:',
          options: [
            'Synthesis of proteins',
            'Packaging and modification of proteins',
            'Photosynthesis',
            'Respiration'
          ],
          answer: 'Packaging and modification of proteins'
        },
        {
          question: 'Select the incorrect pair regarding cell organelle and function:',
          options: [
            'Lysosome – Digestive enzymes',
            'Peroxisome – Photorespiration in plants',
            'Mitochondria – Oxidative phosphorylation',
            'Rough ER – Steroid synthesis'
          ],
          answer: 'Rough ER – Steroid synthesis'
        },
        {
          question: 'Which of the following structures is not found in a prokaryotic cell?',
          options: ['Ribosome', 'Mesosome', 'Nucleoid', 'Nucleolus'],
          answer: 'Nucleolus'
        },
        {
          question: 'The fluid mosaic model of plasma membrane was proposed by:',
          options: ['Robert Hooke', 'Singer and Nicolson', 'Danielli and Davson', 'Schleiden and Schwann'],
          answer: 'Singer and Nicolson'
        },
        {
          question: 'Which of the following is associated with cell division in animal cells?',
          options: ['Golgi body', 'Centriole', 'Mitochondria', 'Chloroplast'],
          answer: 'Centriole'
        },
        {
          question: 'Which of the following structures is involved in the formation of spindle fibers during cell division?',
          options: ['Mitochondria', 'Cytoskeleton', 'Centrioles', 'Peroxisomes'],
          answer: 'Centrioles'
        },
        {
          question: 'Polysomes are:',
          options: [
            'Clusters of ribosomes translating mRNA',
            'Ribosomes on nuclear envelope',
            'Aggregates of mitochondria',
            'Lysosome-bound ribosomes'
          ],
          answer: 'Clusters of ribosomes translating mRNA'
        },
        {
          question: 'Histone proteins are absent in the chromosomes of:',
          options: ['Eukaryotes', 'Fungi', 'Archaebacteria', 'Bacteria'],
          answer: 'Bacteria'
        },
        {
          question: 'Grana and stroma are parts of which cell organelle?',
          options: ['Mitochondria', 'Chloroplast', 'Golgi apparatus', 'Endoplasmic reticulum'],
          answer: 'Chloroplast'
        },
        {
          question: 'Which of the following is not a feature of the nucleus?',
          options: [
            'Nuclear envelope with pores',
            'Contains DNA and histone proteins',
            'Site of ribosomal RNA synthesis',
            'Site of ATP production'
          ],
          answer: 'Site of ATP production'
        }
      ]
    }
      };

  userAnswers: string[] = [];
  selectedSet = 'set1';

  addQuestion(set: string, questionData: any) {
    this.sets[set].questions.push(questionData);
  }

  setSubject(set: string, subject: string) {
    this.sets[set].subject = subject;
  }

  getQuestions() {
    return this.sets[this.selectedSet].questions;
  }

  setSelectedSet(set: string) {
    this.selectedSet = set;
  }

  setAnswers(answers: string[]) {
    this.userAnswers = answers;
  }

  getScore() {
    return this.sets[this.selectedSet].questions
      .filter((q, i) => q.answer === this.userAnswers[i]).length;
  }
}

// @Injectable({
//   providedIn: 'root'
// })
// export class ExamService {
//   questions = [
//     {
//       question: "Who coined the term 'cell'?",
//       options: [
//         'Robert Brown',
//         'Robert Hooke',
//         'Matthias Schleiden',
//         'Anton von Leeuwenhoek'
//       ],
//       answer: 'Robert Hooke'
//     },
//     {
//       question: 'Which of the following scientists proposed that all cells arise from pre-existing cells?',
//       options: [
//         'Rudolf Virchow',
//         'Schleiden',
//         'Schwann',
//         'Huxley'
//       ],
//       answer: 'Rudolf Virchow'
//     },
//     {
//       question: 'Cell theory was jointly proposed by:',
//       options: [
//         'Schleiden and Virchow',
//         'Schwann and Leeuwenhoek',
//         'Schleiden and Schwann',
//         'Schwann and Hooke'
//       ],
//       answer: 'Schleiden and Schwann'
//     },
//     {
//       question: 'Which of the following is not a part of the modern cell theory?',
//       options: [
//         'All living organisms are made up of cells',
//         'All cells arise from pre-existing cells',
//         'Cells can arise spontaneously from non-living matter',
//         'Cell is the basic structural and functional unit of life'
//       ],
//       answer: 'Cells can arise spontaneously from non-living matter'
//     },
//     {
//       question: 'Prokaryotic cells lack:',
//       options: [
//         'Plasma membrane',
//         'Cell wall',
//         'Nucleoid',
//         'Membrane-bound organelles'
//       ],
//       answer: 'Membrane-bound organelles'
//     },
//     {
//       question: 'Which of the following organisms has a prokaryotic cell?',
//       options: [
//         'Amoeba',
//         'Bacteria',
//         'Paramecium',
//         'Fungi'
//       ],
//       answer: 'Bacteria'
//     },
//     {
//       question: 'Which of the following features is common to both prokaryotic and eukaryotic cells?',
//       options: [
//         'Nucleus',
//         'Ribosomes',
//         'Mitochondria',
//         'Endoplasmic reticulum'
//       ],
//       answer: 'Ribosomes'
//     },
//     {
//       question: 'Which scientist is credited with discovering free-living cells in pond water?',
//       options: [
//         'Robert Hooke',
//         'Schleiden',
//         'Anton von Leeuwenhoek',
//         'Schwann'
//       ],
//       answer: 'Anton von Leeuwenhoek'
//     },
//     {
//       question: 'Which of the following is absent in a prokaryotic cell?',
//       options: [
//         'Plasma membrane',
//         'Ribosomes',
//         'DNA',
//         'Nuclear envelope'
//       ],
//       answer: 'Nuclear envelope'
//     },
//     {
//       question: 'Which statement is correct about a multicellular organism?',
//       options: [
//         'It consists of one type of cell only',
//         'All cells perform the same function',
//         'It consists of many specialized cells',
//         'It is structurally and functionally similar to a unicellular organism'
//       ],
//       answer: 'It consists of many specialized cells'
//     }
//   ];

//   userAnswers: string[] = [];

//   getQuestions() {
//     return this.questions;
//   }

//   setAnswers(answers: string[]) {
//     this.userAnswers = answers;
//   }

//   getScore() {
//     return this.questions.filter((q, i) => q.answer === this.userAnswers[i]).length;
//   }
// }
