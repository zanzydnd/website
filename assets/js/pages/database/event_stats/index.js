import eventStatsModal from './eventStatsModal.js';
import '../../../my_chesslablab/myChesslaBlabDropdown.js';
import boardActionsDropdown from '../../../pages/boardActionsDropdown.js';
import gameStudyDropdown from '../../../pages/gameStudyDropdown.js';
import historyButtons from '../../../pages/historyButtons.js';
import ws from '../../../sanWs.js';

await ws.connect();

localStorage.clear();

eventStatsModal.modal.show();
