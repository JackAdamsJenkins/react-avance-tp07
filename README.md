# TP : Maintenance, Audit et Mise à jour

## Scénario

"Vous arrivez sur un projet qui n'a pas été touché depuis un an. Votre mission est d'ajouter une nouvelle fonctionnalité, mais avant ça, vous devez assainir la base.

On ne met pas à jour pour le plaisir de voir des chiffres grimper, mais pour la sécurité et la performance. Vous allez devoir faire preuve de méthode : on commence par observer, on diagnostique, et seulement après, on opère. C'est ici que votre rigueur sur le SemVer et les tests de non-régression va faire toute la différence."

---

## Instructions Étudiant

### 1. Phase d'Audit (Le Diagnostic)

Ouvrez le projet dans votre terminal.

**Étape A : Santé**

1. Installez les dépendances actuelles : `npm install`
2. Lancez la commande `npm audit`.
3. Notez le nombre et la sévérité des vulnérabilités trouvées.

**Étape B : Obsolescence**

1. Lancez `npm outdated`.
2. Listez les 3 librairies ayant le plus grand retard entre la version `Current` et la version `Wanted` (ou `Latest`).
3. Identifiez s'il y a des passages de versions Majeures prévus (changement du premier chiffre, ex: 1.x.x -> 2.x.x).

---

### 2. Stratégie de mise à jour (Le Plan)

Avant de lancer les mises à jour, analysez le fichier `package.json` et le résultat de `outdated`. Remplissez ce tableau :

| Zone            | Description                        | Candidats (Nom des libs) |
| --------------- | ---------------------------------- | ------------------------ |
| **Zone Verte**  | Patch/Minor (Risque faible)        |                          |
| **Zone Orange** | Major - UI / Utils (Risque modéré) |                          |
| **Zone Rouge**  | Major - Core (Risque critique)     |                          |

_Question : Est-ce que mettre à jour `react-router-dom` ou `react` risque de casser l'application ? Pourquoi ?_

---

### 3. Exécution (L'opération)

**Action 1 : Sécurité**

- Tentez de corriger les vulnérabilités automatiquement : `npm audit fix`
- Vérifiez si cela a suffit. Sinon, notez ce qui reste.

**Action 2 : Quick Wins (Zone Verte)**

- Mettez à jour les librairies sûres (Zone Verte) identifiées à l'étape 2.
  - _Astuce : `npm update <nom-du-paquet>` update vers la version "Wanted"._
- Lancez l'application (`npm run dev`) et parcourez les pages (Dashboard, Détails, Profil) pour vérifier (TNR manuel).

**Action 3 : Le grand saut (Zone Rouge)**

- Simulez une mise à jour majeure. Choisissez **React Router** (passer de v5 à v6/v7).
  - Commande : `npm install react-router-dom@latest`
- Relancez l'application. Que se passe-t-il ? (Écran blanc ? Erreur console ?).
- **Mission de réparation** :
  - Lisez le message d'erreur.
  - Le composant `<Switch>` n'existe plus en v6. Par quoi a-t-il été remplacé ?
  - La prop `component={...}` dans `<Route>` a changé de syntaxe.
  - Modifiez `App.jsx` pour remettre l'application en marche avec la nouvelle version.

---

### 4. Validation (Le Contrôle)

1. Lancez `npm outdated`. Le tableau doit être beaucoup plus vide.
2. Assurez-vous que le build de production passe : `npm run build`.
