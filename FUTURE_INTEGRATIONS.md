# Intégrations futures — MAISON NOVA

La démonstration actuelle n'utilise aucun service de paiement, de livraison, de messagerie ou de stockage distant. Les paniers, favoris et commandes fictives sont conservés dans le navigateur.

- **MariaDB/MySQL** : remplacer les données de `src/data/catalog.ts` derrière `src/lib/catalog.ts` par un repository serveur. Ajouter migrations, validation, permissions et gestion de stocks réelle. phpMyAdmin sert à administrer la base, pas à l'héberger.
- **CinetPay** : implémenter `PaymentProvider` côté serveur avec création de transaction, notifications authentifiées et vérification serveur du statut ; protéger les secrets et garantir l'idempotence. Ne jamais considérer une redirection client comme une preuve de paiement. L'API et les conditions contractuelles doivent être vérifiées avant intégration.
- **Yango** : vérifier la disponibilité et les modalités d'une API adaptée avant de créer un adaptateur réel. Les frais actuels sont entièrement fictifs.
- **Back-office** : écrans administratifs Next.js, authentification sécurisée, rôles, audit, paramètres de livraison/paiement et gestion des médias. Aucun module admin n'est actuellement actif.
- **Passage en production** : fournir vendeur, coordonnées et textes légaux validés, politique des données, métriques de performance, tests de parcours et domaine canonique ; revoir `robots.ts`, `sitemap.ts` et les métadonnées `noindex`.
