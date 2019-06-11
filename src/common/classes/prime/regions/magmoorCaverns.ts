import { RegionObject } from '../../region';
import { PrimeItem } from '../../../enums/primeItem';
import { PrimeLocation } from '../../../enums/primeLocation';
import { PrimeItemCollection } from '../itemCollection';
import { PrimeRandomizerSettings } from '../randomizerSettings';

export function magmoorCaverns(): RegionObject[] {
  const regions: RegionObject[] = [
    {
      name: 'Magmoor Lava Lake',
      locations: {
        [PrimeLocation.LAVA_LAKE]: () => true
      },
      exits: {
        'Magmoor First Half': (items: PrimeItemCollection) => items.canLayBombs(),
        'Chozo Sun Tower': () => true,
      }
    },
    {
      name: 'Magmoor First Half',
      locations: {
        [PrimeLocation.TRICLOPS_PIT]: (items: PrimeItemCollection) => items.has(PrimeItem.SPACE_JUMP_BOOTS) && items.has(PrimeItem.XRAY_VISOR),
        [PrimeLocation.STORAGE_CAVERN]: (items: PrimeItemCollection) => items.has(PrimeItem.MORPH_BALL),
        [PrimeLocation.TRANSPORT_TUNNEL_A]: (items: PrimeItemCollection) => items.canLayBombs(),
        [PrimeLocation.WARRIOR_SHRINE]: (items: PrimeItemCollection) => items.canLayBombs() && items.canBoost() && items.has(PrimeItem.SPACE_JUMP_BOOTS),
        [PrimeLocation.SHORE_TUNNEL]: (items: PrimeItemCollection) => items.canLayPowerBombs() && items.has(PrimeItem.SPACE_JUMP_BOOTS),
      },
      exits: {
        'Magmoor Lava Lake': (items: PrimeItemCollection) => items.canLayBombs(),
        'Magmoor Shrine Tunnel': (items: PrimeItemCollection) => items.canLayPowerBombs(),
        'Magmoor Fiery Shores': (items: PrimeItemCollection) => items.canLayBombs() || items.has(PrimeItem.GRAPPLE_BEAM),
        'Phendrana Shorelines': (items: PrimeItemCollection) => items.canLayBombs()
      }
    },
    {
      name: 'Magmoor Fiery Shores',
      locations: {
        [PrimeLocation.FIERY_SHORES_MORPH_TRACK]: (items: PrimeItemCollection) => items.canLayBombs()
      },
      exits: {
        'Magmoor First Half': (items: PrimeItemCollection) => items.has(PrimeItem.GRAPPLE_BEAM),
        'Tallon Root Cave': (items: PrimeItemCollection) => items.canLayBombs() || items.has(PrimeItem.GRAPPLE_BEAM)
      }
    },
    {
      name: 'Magmoor Shrine Tunnel',
      locations: {
        [PrimeLocation.FIERY_SHORES_WARRIOR_SHRINE_TUNNEL]: () => true
      },
      exits: {
        'Magmoor Fiery Shores': (items: PrimeItemCollection) => items.canLayBombs()
      }
    },
    {
      name: 'Magmoor Second Half',
      locations: {
        [PrimeLocation.MAGMOOR_WORKSTATION]: (items: PrimeItemCollection) => items.has(PrimeItem.MORPH_BALL)
      },
      exits: {
        'Magmoor Plasma Processing': (items: PrimeItemCollection) =>
          items.canLayBombs() && items.canBoost() && items.canSpider() && items.has(PrimeItem.ICE_BEAM),
        'Phendrana Transport Magmoor South': () => true,
        'Tallon Root Cave': () => true,
        'Mines Central': () => true
      }
    },
    {
      name: 'Magmoor Plasma Processing',
      locations: {
        [PrimeLocation.PLASMA_PROCESSING]: () => true
      },
      exits: {
        'Magmoor Second Half': (items: PrimeItemCollection) => items.has(PrimeItem.PLASMA_BEAM)
      }
    }
  ];

  return regions;
};